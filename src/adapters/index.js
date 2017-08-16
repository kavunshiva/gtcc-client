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
