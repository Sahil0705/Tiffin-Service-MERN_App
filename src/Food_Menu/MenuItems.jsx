import React from 'react'
import Card from '../Card';
import Food_Catelogue from '../Food_Catelogue';

const MenuItems = (props) => {
    return (
        <>
           <br/><br/>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">  
            {
                props.items.map((elem) => 
                {
                    const { id, name, image, description, price,type } = elem;
                    return <Card key={id} imgsrc={image} title={name} description={description} type={type} price={price}/>;
                })
            }
            </div>
          </div>
        </div>
      </div><br/><br/>
        </>
    )
}

export default MenuItems
