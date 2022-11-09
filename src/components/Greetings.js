function Greetings(props) {

    // Se props.lang === 'de' => Hallo

    return (
        <div className="greetings-border">


            {/* Esse método está sempre testando todos os idiomas, mesmo quando encontra o primeiro, p.ex, e está retornando uma string vazia para todos os casos em que a condição é falsa.
            {props.lang === 'de' ? 'Hallo ' : ''}
            {props.lang === 'en' ? 'Hello ' : ''}
            {props.lang === 'es' ? 'Hola ' : ''}
            {props.lang === 'fr' ? 'Salut ' : ''}

            {props.children} */
            
        }
            {
                /* Esse método não faz todos os testes e já contatena com o conteúdo do elemento, mas está misturando regra de negócio com apresentação.  */

                (props.lang === 'de' ? 'Hallo ' :
                props.lang === 'en' ? 'Hello ' :
                props.lang === 'es' ? 'Hola ' :
                props.lang === 'fr' ? 'Salut ' : '') + props.children
            }

            {/* Esse método leva a regra de negócio para uma outra função no próprio componente, e a parte de apresentação apenas exibe o conteúdo.
            {getGreeting(props.lang, props.children)} */}

        </div>
    )
}

// function getGreeting(lang, name) {

//     let text = '';

//     if (lang === 'de')
//         text = 'Hallo';
//     else if (lang === 'en')
//         text = 'Hello';
//     else if (lang === 'es')
//         text = 'Hola';
//     else if (lang === 'fr')
//         text = 'Salut';

//     return `${text} ${name}`;

// }


export default Greetings;