import { Component, ChangeDetectorRef } from '@angular/core';
import { CalendarOptions, DateSelectArg, EventClickArg, EventApi } from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import { MatDialog } from '@angular/material/dialog';
import { INITIAL_EVENTS, createEventId } from '../event-utils';
import { DatosRegistroEvento, EventoService } from 'src/app/service/evento.service';
import { EventModalComponent, EventData } from '../event-modal/event-modal.component';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent {
  calendarVisible = true;
  calendarOptions: CalendarOptions = {
    plugins: [
      interactionPlugin,
      dayGridPlugin,
      timeGridPlugin,
      listPlugin,
    ],
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
    },
    initialView: 'dayGridMonth',
    initialEvents: INITIAL_EVENTS, // alternatively, use the `events` setting to fetch from a feed
    weekends: true,
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    select: this.handleDateSelect.bind(this),
    eventClick: this.handleEventClick.bind(this),
    eventsSet: this.handleEvents.bind(this)
  };
  currentEvents: EventApi[] = [];

  constructor(
    private changeDetector: ChangeDetectorRef,
    private eventoService: EventoService,
    public dialog: MatDialog
  ) {}

  handleCalendarToggle() {
    this.calendarVisible = !this.calendarVisible;
  }

  handleWeekendsToggle() {
    this.calendarOptions.weekends = !this.calendarOptions.weekends;
  }

  handleDateSelect(selectInfo: DateSelectArg) {
    const dialogRef = this.dialog.open(EventModalComponent, {
      width: '300px',
      data: {
        veterinaria: '',
        descripcion: '',
        costo: '',
        tipoEvento: '',
        archivo: null,
        mascotaId: 0
      } as EventData
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const newEvent: DatosRegistroEvento = {
          veterinaria: result.veterinaria,
          descripcion: result.descripcion,
          costo: result.costo,
          tipoEvento: result.tipoEvento,
          archivo: result.archivo,
          mascotaId: result.mascotaId
        };

        this.eventoService.registrarEvento(newEvent).subscribe(
          () => {
            selectInfo.view.calendar.addEvent({
              id: createEventId(),
              title: result.veterinaria,
              start: selectInfo.startStr,
              end: selectInfo.endStr,
              allDay: selectInfo.allDay
            });
          },
          (error) => {
            console.error('Error al registrar el evento', error);
          }
        );
      }
    });
  }

  handleEventClick(clickInfo: EventClickArg) {
    if (confirm(`¿Estás seguro de que quieres eliminar el evento '${clickInfo.event.title}'?`)) {
      clickInfo.event.remove();
    }
  }

  handleEvents(events: EventApi[]) {
    this.currentEvents = events;
    this.changeDetector.detectChanges(); // workaround for pressionChangedAfterItHasBeenCheckedError
  }
}
