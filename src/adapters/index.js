import GregHouseImg from '../assets/images/GregHouse.jpg'

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
      }
    ]), 2000))
  }
}
