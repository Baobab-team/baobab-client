import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Modal } from '@Models/modal.model';


@Component({
  selector: 'app-modal-component',
  templateUrl: './modal-component.component.html',
  styleUrls: ['./modal-component.component.scss']
})
export class ModalComponentComponent implements OnInit {
  @Output() confirmEvent: EventEmitter<any> = new EventEmitter();
  @Input() modal: Modal;

  closeResult: string;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  confirm() {
    // this.confirmEvent.emit(this.modal);
    this.activeModal.close(this.modal);
  }
}
