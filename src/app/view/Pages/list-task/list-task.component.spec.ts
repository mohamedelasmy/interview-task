import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTaskComponent } from './list-task.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { GenericService } from 'src/app/core/services/generic.service';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('ListTaskComponent', () => {
  let component: ListTaskComponent;
  let fixture: ComponentFixture<ListTaskComponent>;
  let service: GenericService;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, SharedModule, NgApexchartsModule, NgxPaginationModule],
    });
    service = TestBed.inject(GenericService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should test getTasks', () => {
    const response = {
      "body": {
        "Status": "SUCCESS",
        "ErrorCode": "000",
        "ErrorDescription": "",
        "Tasks": [
          {
            "NameData": {
              "Name": "Main Data Ethiopia",
              "Code": "TSK100"
            },
            "Status": "Running",
            "CreationDate": "2023-03-15 13:23:23",
            "SelectionCriteria": [
              "Electricity Company of Ghana",
              "Demo Region 1",
              "Demo District 1"
            ],
            "Operations": [
              "Load Meter Profile",
              "Commission with tariff",
              "Load Meter Profile",
              "Commission with tariff",
              "Load Meter Profile",
              "Commission with tariff"
            ],
            "Chart": ["20", "50", "80"]
          },
          {
            "NameData": {
              "Name": "Read Data Cons",
              "Code": "TSK101"
            },
            "Status": "Finished",
            "CreationDate": "2023-03-15 13:23:23",
            "SelectionCriteria": [
              "Electricity Company of Ghana",
              "Demo Region 1",
              "Demo District 1"
            ],
            "Operations": ["Load Meter Profile", "Commission with tariff"],
            "Chart": ["20", "50", "80"]
          },
          {
            "NameData": {
              "Name": "Cahnge Traffic Cons",
              "Code": "TSK102"
            },
            "Status": "Queued",
            "CreationDate": "2023-03-15 13:23:23",
            "SelectionCriteria": ["Electricity Company of Ghana", "Demo Region 1"],
            "Operations": ["Load Meter Profile", "Commission with tariff"],
            "Chart": ["20", "50", "80"]
          },
          {
            "NameData": {
              "Name": "Cahnge Traffic",
              "Code": "TSK103"
            },
            "Status": "New",
            "CreationDate": "2023-03-15 13:23:23",
            "SelectionCriteria": ["Electricity Company of Ghana", "Demo Region 1"],
            "Operations": ["Load Meter Profile", "Commission with tariff"],
            "Chart": ["20", "50", "80"]
          },
          {
            "NameData": {
              "Name": "Cahnge Traffic",
              "Code": "TSK103"
            },
            "Status": "New",
            "CreationDate": "2023-03-15 13:23:23",
            "SelectionCriteria": [
              "Electricity Company of Ghana",
              "Demo Region 1",
              "Demo District 1"
            ],
            "Operations": [
              "Load Meter Profile",
              "Commission with tariff",
              "Load Meter Profile",
              "Commission with tariff",
              "Load Meter Profile",
              "Commission with tariff"
            ],
            "Chart": ["20", "50", "80"]
          },
          {
            "NameData": {
              "Name": "Cahnge Traffic",
              "Code": "TSK103"
            },
            "Status": "New",
            "CreationDate": "2023-03-15 13:23:23",
            "SelectionCriteria": [
              "Electricity Company of Ghana",
              "Demo Region 1",
              "Demo District 1"
            ],
            "Operations": [
              "Load Meter Profile",
              "Commission with tariff",
              "Load Meter Profile",
              "Commission with tariff",
              "Load Meter Profile",
              "Commission with tariff"
            ],
            "Chart": ["20", "50", "80"]
          },
          {
            "NameData": {
              "Name": "Cahnge Traffic",
              "Code": "TSK103"
            },
            "Status": "Running",
            "CreationDate": "2023-03-15 13:23:23",
            "SelectionCriteria": [
              "Electricity Company of Ghana",
              "Demo Region 1",
              "Demo District 1"
            ],
            "Operations": [
              "Load Meter Profile",
              "Commission with tariff",
              "Load Meter Profile",
              "Commission with tariff",
              "Load Meter Profile",
              "Commission with tariff"
            ],
            "Chart": ["20", "50", "80"]
          },
          {
            "NameData": {
              "Name": "Cahnge Traffic",
              "Code": "TSK103"
            },
            "Status": "Running",
            "CreationDate": "2023-03-15 13:23:23",
            "SelectionCriteria": [
              "Electricity Company of Ghana",
              "Demo Region 1",
              "Demo District 1"
            ],
            "Operations": [
              "Load Meter Profile",
              "Commission with tariff",
              "Load Meter Profile",
              "Commission with tariff",
              "Load Meter Profile",
              "Commission with tariff"
            ],
            "Chart": ["20", "50", "80"]
          }
        ]
      }
    };

    service.getMethod('assets/Data/tasks.json').subscribe((res) => {
      expect(res).toEqual(response);
    });

    const req = httpController.expectOne({
      method: 'GET',
      url: `assets/Data/tasks.json`,
    });

    req.flush(response);
  });

});

