import { InMemoryDbService } from "angular-in-memory-web-api";



export class BackendService implements InMemoryDbService {

    constructor() { }

    createDb() {
        let dB = [
            {
              id:1,
              aLastName: 'Ivanova',
              aFirstName: 'Ivana',
              aMiddleName: 'Ivanovna',
              aCars: [
                {
                  number: 'HT2031GT',
                  manufacturer: "Jeep",
                  model: "Patriot",
                  year: 2015
                }
               ]
            
             
            },
            {
                id: 2,
                aLastName: 'Ivanov',
                aFirstName: 'Ivan',
                aMiddleName: 'Ivanovich',
                aCars: [
                  {
                    number: 'AZ1234ZA',
                    manufacturer: "Lada",
                    model: "Ваз2106",
                    year: 1997
                  },
                  {
                    number: 'AZ1234ZA',
                    manufacturer: "BMW",
                    model: "X1",
                    year: 2007
                  },
                  
                ]
              
               
              }
        ];
        return  {dB}
    }
}
