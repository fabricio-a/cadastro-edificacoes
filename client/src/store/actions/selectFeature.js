export default function setDataOnForm(s_id, value) {
    let payload = {};

    if(value === 'none')
        s_id.forEach(item => {
            payload[item] = '';
        });
    else {
        s_id.forEach(item => {
            if(value[item] === null) payload[item] = '';
            else payload[item] = value[item];
        });
    }

    return(
        {
            type: 'SET_DATA_ON_FORM',
            payload
        }
    );
}