import Search from './models/Search';
import * as searchView from './views/searchview'
import {elements, renderLoader, clearLoader} from './views/base';

/** ... global state...
 * - search object
 * - liked recipes 
 * - shopping cart
 * - current recipe
 * 
 */

const state = {}

const controlSearch = async () => {
    // get query from view
    const query = searchView.getInput();

    if(query){

        state.search = new Search(query);

        searchView.claerInput();
        searchView.clearResults();
        renderLoader(elements.searchRes);

        await state.search.getResults();

        clearLoader();
        searchView.renderResults(state.search.result);
    }

}

elements.serachForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();

});

