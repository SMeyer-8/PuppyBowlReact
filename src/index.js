import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { BrowserRouter } from "react-router-dom";

//In case we accidentally delete all puppies lol
// import { addNewPlayer } from './ajaxHelpers/puppies';

// let seed = [{"id":3869,"name":"Anise","breed":"Australian Cattle Dog / Labrador Retriever","status":"field","imageUrl":"http://r.ddmcdn.com/w_912/s_f/o_1/cx_51/cy_0/cw_912/ch_1368/APL/uploads/2019/12/Anise-PBXVI.jpg","createdAt":"2023-04-17T01:37:00.786Z","updatedAt":"2023-04-17T01:37:00.786Z","teamId":371,"cohortId":219},{"id":3870,"name":"Bert","breed":"Great Pyrenees / Weimaraner","status":"field","imageUrl":"http://r.ddmcdn.com/w_1010/s_f/o_1/cx_0/cy_4/cw_1010/ch_1515/APL/uploads/2019/12/Bert-PBXVI.jpg","createdAt":"2023-04-17T01:37:00.786Z","updatedAt":"2023-04-17T01:37:00.786Z","teamId":371,"cohortId":219},{"id":3871,"name":"Crumpet","breed":"American Staffordshire Terrier","status":"field","imageUrl":"http://r.ddmcdn.com/w_1012/s_f/o_1/cx_0/cy_0/cw_1012/ch_1518/APL/uploads/2019/12/Crumpet-PBXVI.jpg","createdAt":"2023-04-17T01:37:00.786Z","updatedAt":"2023-04-17T01:37:00.786Z","teamId":371,"cohortId":219},{"id":3872,"name":"Daphne","breed":"German Shepherd","status":"field","imageUrl":"http://r.ddmcdn.com/w_960/s_f/o_1/cx_25/cy_0/cw_960/ch_1440/APL/uploads/2020/01/Daphne-PBXVI.jpg","createdAt":"2023-04-17T01:37:00.786Z","updatedAt":"2023-04-17T01:37:00.786Z","teamId":371,"cohortId":219},{"id":3873,"name":"Duncan","breed":"Collie","status":"field","imageUrl":"http://r.ddmcdn.com/w_1012/s_f/o_1/cx_0/cy_49/cw_1012/ch_1518/APL/uploads/2020/01/Duncan-PBXVI-v2.jpg","createdAt":"2023-04-17T01:37:00.786Z","updatedAt":"2023-04-17T01:37:00.786Z","teamId":371,"cohortId":219},{"id":3875,"name":"Gina","breed":"Labrador Retriever / Chow Chow","status":"bench","imageUrl":"http://r.ddmcdn.com/w_1012/s_f/o_1/cx_0/cy_0/cw_1012/ch_1518/APL/uploads/2019/12/Gina-PBXVI.jpg","createdAt":"2023-04-17T01:37:00.787Z","updatedAt":"2023-04-17T01:37:00.787Z","teamId":371,"cohortId":219},{"id":3876,"name":"Huck","breed":"Miniature Poodle / Shih Tzu","status":"bench","imageUrl":"http://r.ddmcdn.com/w_962/s_f/o_1/cx_25/cy_0/cw_962/ch_1443/APL/uploads/2019/12/Huck-PBXVI.jpg","createdAt":"2023-04-17T01:37:00.787Z","updatedAt":"2023-04-17T01:37:00.787Z","teamId":371,"cohortId":219},{"id":3877,"name":"Jack","breed":"Chihuahua / Miniature Poodle","status":"bench","imageUrl":"http://r.ddmcdn.com/w_926/s_f/o_1/cx_42/cy_0/cw_926/ch_1389/APL/uploads/2019/12/Jack-PBXVI.jpg","createdAt":"2023-04-17T01:37:00.787Z","updatedAt":"2023-04-17T01:37:00.787Z","teamId":371,"cohortId":219},{"id":3874,"name":"Filbert","breed":"Shetland Sheepdog / Border Collie","status":"field","imageUrl":"http://r.ddmcdn.com/w_942/s_f/o_1/cx_35/cy_0/cw_942/ch_1413/APL/uploads/2019/12/Filbert-PBXVI.jpg","createdAt":"2023-04-17T01:37:00.787Z","updatedAt":"2023-04-17T01:37:00.787Z","teamId":371,"cohortId":219},{"id":3878,"name":"Kenny","breed":"Golden Retriever / Boxer","status":"bench","imageUrl":"http://r.ddmcdn.com/w_1012/s_f/o_1/cx_0/cy_0/cw_1012/ch_1518/APL/uploads/2019/12/Kenny-PBXVI.jpg","createdAt":"2023-04-17T01:37:00.787Z","updatedAt":"2023-04-17T01:37:00.787Z","teamId":371,"cohortId":219}]

// for(let player of seed) {
//     addNewPlayer(player);
// }

const appElement = document.getElementById("app")
const root = createRoot(appElement)
//const BasicComponentNameHere = () => { return ( <div> <p>Hello World!</p></div>)}
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </React.StrictMode>
)