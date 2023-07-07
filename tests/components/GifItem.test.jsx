import { render,screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('Pruebas en <GifItem.jsx/>', () => { 
    const title = 'Saitama';
    const url   = 'https://one-punch.com/saitama.jpg';

    test('Debe de hacer match con el snapshoot',()=>{
        const {container}=render(<GifItem title={title} url={url} />);

        expect(container).toMatchSnapshot();
    });

    test('debe mostrar la imagen con el url y el alt indicado',()=>{

        render(<GifItem title={title} url={url} />);
        //screen.debug();
        //expect(screen.getByRole('img').src).toBe(url);
        //expect(screen.getByRole('img').alt).toBe(title);
        // una mejor forma de hacerlo
        const {src,alt} = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(alt);

    });

    test('Debe mostrar el tirulo en el componente',()=>{

        render(<GifItem title={title} url={url}/>)
        expect(screen.getByText(title)).toBeTruthy();

    });
 });