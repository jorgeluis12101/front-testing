import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { CalendarOptions, DateSelectArg, EventClickArg, EventApi, EventInput, EventDropArg } from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import { MatDialog } from '@angular/material/dialog';
import { DatosRegistroEvento, EventoService, Evento } from 'src/app/service/evento.service';
import { EventModalComponent, EventData } from '../event-modal/event-modal.component';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent implements OnInit {
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
    weekends: true,
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    events: [],
    select: this.handleDateSelect.bind(this),
    eventClick: this.handleEventClick.bind(this),
    eventsSet: this.handleEvents.bind(this),
    eventDrop: this.handleEventDrop.bind(this) // Añadir el manejador de arrastrar y soltar
  };
  currentEvents: EventApi[] = [];

  constructor(
    private changeDetector: ChangeDetectorRef,
    private eventoService: EventoService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.cargarEventos();
  }

  cargarEventos() {
    this.eventoService.obtenerEventos().subscribe(
      (eventos: Evento[]) => {
        console.log('Eventos obtenidos del backend:', eventos);
        const calendarEvents: EventInput[] = eventos.map(evento => ({
          id: String(evento.id),
          title: `${evento.tipoEvento} - ${evento.veterinaria}`,
          start: evento.fecha,
          end: evento.fecha,
          allDay: true
        }));
        console.log('Eventos configurados para el calendario:', calendarEvents);
        this.calendarOptions.events = calendarEvents;
        this.currentEvents = calendarEvents as EventApi[];
        this.changeDetector.detectChanges();
      },
      (error) => {
        console.error('Error al cargar los eventos', error);
      }
    );
  }

  handleEventDrop(eventDropInfo: EventDropArg) {
    const eventoId = Number(eventDropInfo.event.id);
    const nuevaFecha = eventDropInfo.event.startStr;

    this.eventoService.actualizarFechaEvento(eventoId, nuevaFecha).subscribe(
      () => {
        console.log('Evento actualizado con éxito');
        this.cargarEventos(); // Recargar eventos después de mover uno
      },
      (error) => {
        console.error('Error al actualizar la fecha del evento', error);
      }
    );
  }

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
        mascotaId: 0,
        fecha: selectInfo.startStr // Pasar la fecha seleccionada al modal
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
          mascotaId: result.mascotaId,
          fecha: result.fecha // Asegurarse de incluir la fecha seleccionada
        };

        this.eventoService.registrarEvento(newEvent).subscribe(
          () => {
            console.log('Evento registrado con éxito:', newEvent);
            this.cargarEventos(); // Recargar eventos después de agregar uno nuevo
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
      this.eventoService.eliminarEvento(Number(clickInfo.event.id)).subscribe(
        () => {
          console.log('Evento eliminado con éxito');
          clickInfo.event.remove();
        },
        (error) => {
          console.error('Error al eliminar el evento', error);
        }
      );
    }
  }

  handleEvents(events: EventApi[]) {
    this.currentEvents = events;
    this.changeDetector.detectChanges(); // Trabajo en torno a pressionChangedAfterItHasBeenCheckedError
  }
}
