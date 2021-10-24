import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarEditarUsuarioComponent } from './criar-editar-usuario.component';

describe('CriarEditarUsuarioComponent', () => {
  let component: CriarEditarUsuarioComponent;
  let fixture: ComponentFixture<CriarEditarUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarEditarUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarEditarUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
