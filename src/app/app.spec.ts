import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { App } from './app';
import { AppService } from './app.service';

describe('App test', () => {
  let appService: AppService;

  let fixture: ComponentFixture<App>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [AppService, provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();

    fixture = TestBed.createComponent(App);
    appService = fixture.debugElement.injector.get(AppService);
  });

  it('should call a service', () => {
    spyOn(appService, 'getUsers').and.returnValue(of([{ name: 'John Doe' }]));

    TestBed.tick();

    fixture.detectChanges();

    expect(appService.getUsers).toHaveBeenCalled();
  });
});
