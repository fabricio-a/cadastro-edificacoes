export default function setDataOnForm(s_id, value) {
    let payload = {};

    if(value === 'clear') 
        s_id.forEach(item => {
            payload[item] = '';
        });
    else {
        let temp_obj = {};
        temp_obj[s_id] = value;
        payload = { ...temp_obj };
    }

    return(
        {
            type: 'SET_DATA_ON_FORM',
            payload
        }
    );
}