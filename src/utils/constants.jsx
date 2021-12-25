export const API_URL = "https://sypartage.herokuapp.com/api/articles/";
export const PROFILE_URL = "https://sypartage.herokuapp.com/api/auth/profiles/1/";
export function setArticleURL(id){
    return `https://sypartage.herokuapp.com/api/articles/${id}/`
}
export function setAuthorURL(article){
    return `https://sypartage.herokuapp.com/api/auth/users/${article.author}/`
}
