// poderia desconstruir o objeto props e incluir o nome das propriedades!  DESCONSTRUINDO OBJETO

function BoxColor(props) {

    return (
        // O Style espera um objeto
        <div className="boxColor-border" style={{ backgroundColor: `rgb(${props.r},${props.g},${props.b})`, color: getColor(props.r, props.g, props.b) }}>
            <div>rgb({props.r},{props.g},{props.b})</div>
            {/* Com o objeto descontruido seria rgb{r},{g},{b} */}
            <div>{rgbToHex(props.r, props.g, props.b)}</div>
        </div>
    )
}

//Outra forma para mostrar HEX
// #{r.toString(16)};

function rgbToHex(r, g, b) {

    return '#' + [r, g, b].map(x => {
        const hex = x.toString(16)
        return hex.length === 1 ? '0' + hex : hex;
    }).join('');

}

// Usando a fórmula YIQ - seja lá o que isso queira dizer, mas se a cor de fundo for clara, a a cor fonte é preta.

function getColor(r, g, b) {

    const color = Math.round(((r * 299) +
        (g * 587) +
        (b * 114)) / 1000);

    return (color > 125) ? 'black' : 'white';
}
export default BoxColor;

