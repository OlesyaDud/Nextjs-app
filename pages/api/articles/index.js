import { apple } from '../../../data';


export default function handler(req, res) {

    console.log( apple )
    res.status(200).json( apple );

}
