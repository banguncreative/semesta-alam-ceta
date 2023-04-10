export default class {
    constructor(_token){
        this.base = "https://script.google.com";
        this.endpoint = this.base + `/macros/s/${_token}/exec`;
    }

    getAllData(){
        if(this.data) return data;
        var method = "getAllData";
        var query = "";
        var server = this.endpoint+`?m=${method}${(query? "&q="+query: "")}`;

        var opt = {
            method: "GET",
            headers:{
                
            }
        }

        return new Promise((resolve, reject)=>{
            try{
                fetch(server, opt)
                .then(r => r.json())
                .then(data => {
                    this.data = data;
                    resolve(data)
                })
            }catch(err){
                resolve(err)
            }
        })
    }
}

// https://script.google.com/macros/s/AKfycbysDNKbTBXISo0cvKz6IELe9Ji7JyYw0cinMoS_GpSAZt7DKZwBFfZXNbFyAGW2MjJc/exec?m=getAllData