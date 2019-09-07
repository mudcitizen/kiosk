import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { FinderComponent } from './finder.component';
import { StaticDataProvider } from 'src/app/data/providers/static.provider';
import { DataService } from 'src/app/data/service/data.service';
import { Injection_Token_DataProvider } from 'src/app/common/constants';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppModule } from 'src/app/app.module';
import { APP_BASE_HREF } from '@angular/common';

describe('FinderComponent', () => {
  let component: FinderComponent;
  let fixture: ComponentFixture<FinderComponent>;

  beforeEach(async(() => {
    
    TestBed.configureTestingModule({

      imports: [FormsModule,
        AppModule,
        AppRoutingModule],

      providers: [
        { provide: Injection_Token_DataProvider, useValue: new StaticDataProvider() },
        { provide: DataService, useClass: DataService },
        { provide: APP_BASE_HREF, useValue: '/' }
      ]

    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
