import { defineStore} from "pinia" 

export const useUtilsStore = defineStore('utils', {
    state: () => ({ 
        activeUtils:1,
    }),
    getters: {
      
    },
    actions: {
      changeActiveUtils(activeNum :number){
        this.activeUtils = activeNum;
      }
    },
  })
  