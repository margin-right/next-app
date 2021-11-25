import dbConnect from "../../../utils/dbConnection";
import Note from "../../../models/Note";

dbConnect();
export default async (req, res) => {
    const {
        query: {log},
        method
    } = req;
    switch (method) {
        case 'GET':
            try {
                const note = await Note.findOne({login: log});
                if(!note){
                    return res.status(400).json({success: false})
                }
                res.status(200).json({success:true,data:note})
            } catch (error) {
                res.status(400).json({success: false})
            }
            break;
        case 'PUT':
            try {
                const note = await Note.findByIdAndUpdate(log, req.body, {
                    new: true,
                    runValidators: true
                });
                if(!note){
                    return res.status(400).json({success: false})
                }
                res.status(200).json({success:true,data:note})
            } catch (error) {
                res.status(400).json({success: false})
            }
            break;
        case 'DELETE':
            try {
                const deletedNote = await Note.deleteOne({login: log});
                if(!deletedNote){
                    return res.status(400).json({success: false})
                }
                res.status(200).json({success:true,data:{}})
            } catch (error) {
                res.status(400).json({success: false})
            }
            break;
        default:
            res.status(400).json({success: false})
            break;
    }
}
