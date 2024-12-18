import React, {useContext} from 'react'
import {GlobalState} from '../../../GlobalState'

function Filters() {
    const state = useContext(GlobalState)
    const [categories] = state.categoriesAPI.categories || [];


    const [category, setCategory] = state.productsAPI.category
    const [sort, setSort] = state.productsAPI.sort
    const [search, setSearch] = state.productsAPI.search


    const handleCategory = e => {
        setCategory(e.target.value)
        setSearch('')
    }
    console.log('Categories:', categories);



    return (
        <div className="filter_menu">
            <div className="row">
                <span>Filtros: </span>
                <select name="category" value={category} onChange={handleCategory} >
                    <option value=''>Todos</option>
                    {Array.isArray(categories) &&
                        categories.map((category) => (
                            <option value={'category=' + category._id} key={category._id}>
                                {category.name}
                            </option>
                        ))}
                </select>
            </div>
            

            <input type="text" value={search} placeholder="  Pesquisar"
            onChange={e => setSearch(e.target.value.toLowerCase())} />

            <div className="row sort">
                <span>Filtrar por: </span>
                <select value={sort} onChange={e => setSort(e.target.value)} >
                    <option value=''>Mais Novos</option>
                    <option value='sort=oldest'>Mais Antigo</option>
                    <option value='sort=-sold'>Mais vendidos</option>
                    <option value='sort=-price'>Preço: Alto-Baixo</option>
                    <option value='sort=price'>Preço: Baixo-Alto</option>
                </select>
            </div>
        </div>
    )
}

export default Filters
