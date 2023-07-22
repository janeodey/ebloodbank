
fetch("doseRegistry.json")
    .then((response)=>{
        return response.json()
    })
    .then(data=>{
        let placeholder = document.querySelector("#data-output");
        let output="";
        for(let registry of data){
            output += `
                <tr>
                    <td><img src='${registry.image}' height="100px" width="100px"></td>
                    <td>${registry.modality}</td>
                    <td>${registry.age}</td>
                </tr>
            `
        }
        placeholder.innerHTML = output
    })