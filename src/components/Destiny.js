import React from 'react';

class Destiny extends React.Component {

aviso (event) {
    const city = event.target.value.toUpperCase();
    alert(`Su destino es viajar a ${city}`);
}

render () {

return (
    <select name="destinos" id="destinos" onChange={this.aviso}>
        <option>Elige tu destino</option>
        <option value="buenosAires">Buenos Aires</option>
        <option value="sydney">Sydney</option>
        <option value="praga">Praga</option>
        <option value="boston">Boston</option>
        <option value="tokyo">Tokyo</option>
    </select>
 );
}
}

export default Destiny;