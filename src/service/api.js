
export default class Api{
     url = 'https://swapi.co/api/';
   async getPlanetsID(id){
        const res = await this.getResurce(`planets/${id}/`);
        return this.transformPlanets(res);
    }
    async getPlanetsAll(){
       const res = await this.getResurce(`planets`)
        return res.result.map(this.transformPlanets());
}
        getResurce = async (urlcontext)=>{
        const res= await fetch(`${this.url}${urlcontext}`);
        if (!res.ok){
            throw  new Error(`not server${res.status}`)
        }
        return  await res.json();
    };
     getId(data){
         const reg = /\/([0-9]*)\/$/;
        return data.url.match(reg)[1];
  }
    transformPlanets(planets){
           return {
               id:this.getId(planets),
               name:planets.name,
               population:planets.population,
               rotationPeriod:planets.rotation_period
           }
    }
}



