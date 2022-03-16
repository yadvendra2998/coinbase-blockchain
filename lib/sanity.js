import sanityClient  from "@sanity/client";


export const client = sanityClient({
    projectId:'pg32xg1p',
    dataset:'production',
    apiVersion: '2021-03-25',
    token:'skEFoWf9jq5tmn5qbK5FxDgQgy2sWlkb3h4Hu2L7XrO8TAVrRqdXaJ8VeVpIdTsQxfE8VjWBlltSl33JketxNZPYERqhnic1t66mgiefZOYiMUCDfP2GRYT3asd8UVR81Mb82CIfSE0emKolynGW0PTdvLc8xoEgvxHqPJxidnUekKQBHBQG',
    useCdn:false, 
})