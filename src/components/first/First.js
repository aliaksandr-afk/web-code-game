import React from 'react';
import { Component, useState } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Page from '../Page/Page'
import style from './First.module.css'

/* const First = () => {
    return (
        <div>
            <div className = "preview" >
    HTML - это язык разметки документов.

    Вы, наверняка, работали когда - нибудь в редакторе документов Word или подобных офисных приложениях ? Наверное вы знаете, что данный вид 
    редакторов имеет богатые возможности для редактирования текста, расположения элементов, вставки картинок и т.д.

    Зачем, спросите вы, писать в статье, посвященной HTML о текстовых процессорах ? А вот зачем.Если разобраться, что такое офисный редактор ?
     Это приложение для редактирования и отображения документов.

    Ключевое слово здесь - документ.То есть, мы создаем, редактируем и просматриваем документ в какой - то программе, в данном случае - 
    в офисном редакторе.Если открыть такой документ в простом текстовом редакторе, например, в Блокноте, то мы увидим множество странных 
    символов и знаков.Эта каша из символов непонятна человечеству, но понятна компьютерам.Благодаря этому внутреннему языку, документ Word 
    приобретает определенную структуру и вид в самом редакторе, а документ предстает перед нами во всей своей красе с отформатированным 
    текстом и картинками на своем месте.

    HTML - это язык разметки документов для браузера.Word 'ом здесь выступает браузер, а документом - HTML страничка. Это самая основа 
    технологии HTML, понимание которой необходимо для того, чтобы не путать язык разметки веб документов с языками программирования. 
    Название говорит за себя - с помощью HTML мы размечаем, где на странице будет показан элемент, картинка или текст, и в каком порядке 
    они будут следовать друг за другом.

    Да, простой набор и форматирование текста в офисных приложениях не имеют ни чего общего с программированием.Но наблюдательный 
    читатель заметит важную деталь - в текстовом процессоре мы набираем, редактируем и форматируем текст и картинки с помощью визуальных 
    кнопочек и меню, но почему же HTML код пишется вручную ? Зачем изучать так много технических деталей написания разметки для документа ?
            </div>
        </div>
        
    );
};

export default First; */

/*
export default class First extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            gender: null,
            level: null,
            points: 0
        }
        this.upCount = this.upCount.bind(this);
    }
    upCount() {
        console.log(this.state.points)
        this.setState(state=>({
            points: ++state.points
        }))
    }
    render() {
        const {name, gender, level, points} = this.state;
        return (
            /* <Router>
                <Routes>
                    <Route path="/page1" element={<Page/>}/>
                    <Route path="/page2" element={<Page/>}/>
                </Routes>
            </Router> 
            
            
               <div className='first-page'>
                <button onClick={this.upCount}>+</button>
                <h3>Name: {name}</h3>
                <h3>Level: {level}</h3>
                <a href='#'>{name}: {points}</a>
            </div> 
           
        )
    }
}
*/

function First() {
    const [count, setCount] = useState(0);

    return(
    <div className={style.page}>
        <p>Вы кликнули {count} раз</p>
        <button
        onClick={()=>setCount(count+1)}>+</button>
    </div>
)
}



export default First;