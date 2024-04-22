import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricoConsultasComponent } from './historico-consultas.component';

describe('HistoricoConsultasComponent', () => {
  let component: HistoricoConsultasComponent;
  let fixture: ComponentFixture<HistoricoConsultasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HistoricoConsultasComponent]
    });
    fixture = TestBed.createComponent(HistoricoConsultasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
