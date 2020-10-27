import { Client } from "../model/Client.js"
import { ClientRepository } from "./data/Repository.js"
import { State } from "./../state.js";


export function demo() {

  var maybeClient = ClientRepository.getById(1);

  var fold = maybeClient
    .map(m => m.map(c => c.name))
    .run({ state: Db })
    .value
    .match({
      right: value => `employee name: ${value}`,
      left: error => `error: ${error}`
    });

  console.log(fold);

  {
    // var stateMaybeClient = State(env => {
    //   return {
    //     value: maybeClient
    //     // .match({
    //     //   right: value => env.state.titleTemplate(value),
    //     //   left: error => `error: ${error}`
    //     // })
    //     ,
    //     state: env.state
    //   };
    // });

    // var fold = stateMaybeClient
    //   .map(m => m.map(c => c.name))
    //   .run({ state: { titleTemplate: s => `the employee name is ${s}` } })
    //   .value
    //   .match({
    //     right: value => `employee name: ${value}`,
    //     left: error => `error: ${error}`
    //   });

    // console.log(fold);
  }




}
