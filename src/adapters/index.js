import GregHouseImg from '../assets/images/GregHouse.jpg'
import DerekShepherdImg from '../assets/images/DerekShepherd.jpg'

export class PhysiciansAdapter {
  static all(){
    // simulate asynchronous API call using setTimeout()
    return new Promise((resolve) => setTimeout(() => resolve([
        {
          id: 14,
          name: "Gregory House",
          specialization: "diagnostician",
          education: "University of Michigan",
          description: "An irascible genius struggling with an opiod addiction, he may just figure out what's wrong with you before it's too late.",
          image: GregHouseImg
        },
        {
          id: 15,
          name: "Derek Shepherd",
          specialization: "surgeon",
          education: "Columbia University",
          description: "Lost causes and impossible cases are no match for the smooth moves and skilled hands of McDreamy.",
          image: DerekShepherdImg
        }
      ]), 2000))
  }
}

export class AppointmentsAdapter {
  static all(){
    // simulate asynchronous API call using setTimeout()
    return new Promise((resolve) => setTimeout(() => resolve([
      {
        "id" : 695,
        "patient_id" : 16,
        "physician_id" : 14,
        "start" : "2015-04-24T07:00:00-06:00",
        "end" : "2015-04-24T07:30:00-06:00",
        "last_date" : "2015-04-02",
        "symptoms" : "mild depression, dysphoria",
        "created_at" : "2015-04-21T10:44:51-06:00",
        "updated_at" : "2015-04-21T10:44:51-06:00"
      },
      {
        "id" : 696,
        "patient_id" : 16,
        "physician_id" : 15,
        "start" : "2015-04-25T14:00:00-06:00",
        "end" : "2015-04-25T14:45:00-06:00",
        "last_date" : "2015-03-17",
        "symptoms" : "PTSD, bipolar disorder",
        "created_at" : "2015-04-21T10:44:51-06:00",
        "updated_at" : "2015-04-21T10:44:51-06:00"
      },
      {
        "id" : 697,
        "patient_id" : 16,
        "physician_id" : 14,
        "start" : "2017-08-15T22:07:00-06:00",
        "end" : "2017-08-15T22:30:00-06:00",
        "last_date" : "2016-09-22",
        "symptoms" : "body dysmorphic disorder, anorexia nervosa, major depression",
        "created_at" : "2015-04-21T10:44:51-06:00",
        "updated_at" : "2015-04-21T10:44:51-06:00"
      }
    ]), 2000))
  }
}
