export const GET_BOOKS = 'GET_BOOKS'
export const GET_BOOK = 'GET_BOOK'
export const CREATE_BOOK = 'CREATE_BOOK'
export const UPDATE_BOOK = 'UPDATE_BOOK'
export const DELETE_BOOK = 'DELETE_BOOK'
export const ON_CHANGE_INPUT = 'ON_CHANGE_INPUT'
export const ON_CHANGE_INPUT_FORM = 'ON_CHANGE_INPUT_FORM'
export const HANDLE_SUBMIT_FORM = 'HANDLE_SUBMIT_FORM'
export const HANDLE_SELECT_BOOK = 'HANDLE_SELECT_BOOK'

export class BookFormClass {
    id;
    title;
    excerpt;
    description;
    pageCount;
    publishDate;

    constructor({ title = '' ,id ='' , description = '' ,pageCount ='' , excerpt = '', publishDate = '' }){
        this.id = id;
        this.description = description;
        this.title = title;
        this.pageCount = pageCount;
        this.excerpt = excerpt;
        this.publishDate = publishDate;
    }
}