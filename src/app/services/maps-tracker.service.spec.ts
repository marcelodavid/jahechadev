import { TestBed } from '@angular/core/testing';

import { MapsTrackerService } from './maps-tracker.service';

describe('MapsTrackerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MapsTrackerService = TestBed.get(MapsTrackerService);
    expect(service).toBeTruthy();
  });
});
