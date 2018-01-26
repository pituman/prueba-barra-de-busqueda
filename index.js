var demo = new Vue({
    el: '#main',
    data: {
        searchString: "",
        
        articles: [
            {
                "title": "Alavés",
                "url": "https://www.deportivoalaves.com/",
                "image":"http://www.lafutbolteca.com/wp-content/uploads/2009/11/ALAVES-150x150.jpg"
            },
            {
                "title": "Athletic Club de Bilbao",
                "url": "http://www.athletic-club.eus/",
                "image":"http://www.lafutbolteca.com/wp-content/uploads/2010/01/ATHLETIC-150x150.jpg"
            },
            {
                "title": "Atlético de Madrid",
                "url": "http://www.atleticodemadrid.com/",
                "image": "http://www.lafutbolteca.com/wp-content/uploads/2010/01/ATLETICO-150x150.jpg"
                
            },
            {
                "title": "FC Barcelona",
                "url": "https://www.fcbarcelona.es/",
                "image": "http://www.lafutbolteca.com/wp-content/uploads/2009/11/BARCELONA-150x150.jpg"
            },
            {
                "title": "Real Club Celta de Vigo",
                "url": "http://www.rccelta.es/index.php/es/",
                "image": "http://www.lafutbolteca.com/wp-content/uploads/2010/01/CELTA-150x150.jpg"
            },
            {
                "title": "Real Club Deportivo de la Coruña",
                "url": "https://www.rcdeportivo.es/",
                "image": "http://www.lafutbolteca.com/wp-content/uploads/2009/11/DEPORTIVO-150x150.jpg"
            },
            {
                "title": "SD Eibar",
                "url": "http://www.sdeibar.com/",
                "image": "http://www.lafutbolteca.com/wp-content/uploads/2009/11/EIBAR-150x150.jpg"
            },
            {
                "title": "RCD Espanyol",
                "url": "https://www.rcdespanyol.com/",
                "image": "http://www.lafutbolteca.com/wp-content/uploads/2009/11/ESPANYOL-150x150.jpg"
            },
            {
                "title": "Getafe CF",
                "url": "http://www.getafecf.com/",
                "image": "http://www.lafutbolteca.com/wp-content/uploads/2010/01/GETAFE-150x150.jpg"
            },
            {
                "title": "Girona FC",
                "url": "http://www.gironafc.cat/es",
                "image": "http://www.lafutbolteca.com/wp-content/uploads/2010/01/GIRONA-150x150.jpg"
            },
            {
                "title": "Real Betis",
                "url": "http://www.realbetisbalompie.es/",
                "image": "http://www.lafutbolteca.com/wp-content/uploads/2010/01/REAL-BETIS-150x150.jpg"
            },
            {
                "title": "Málaga CF",
                "url": "https://www.malagacf.com/",
                "image": "http://www.lafutbolteca.com/wp-content/uploads/2009/11/MALAGA-150x150.jpg"
            },
            {
                "title": "Levante U.D.",
                "url": "http://www.levanteud.com/",
                "image": "http://www.lafutbolteca.com/wp-content/uploads/2010/01/LEVANTE-150x150.jpg"
            },
            {
                "title": "CD Leganés",
                "url": "https://www.deportivoleganes.com/",
                "image": "http://www.lafutbolteca.com/wp-content/uploads/2009/11/LEGANES-150x150.jpg"
            },
            {
                "title": "UD Las Palmas",
                "url": "https://www.udlaspalmas.es/",
                "image": "http://www.lafutbolteca.com/wp-content/uploads/2010/01/LAS-PALMAS-150x150.jpg"
            },
            {
                "title": "Real Madrid CF",
                "url": "https://www.realmadrid.com/",
                "image": "http://www.lafutbolteca.com/wp-content/uploads/2009/11/REAL-MADRID-150x150.jpg"
            },
            {
                "title": "Real Sociedad",
                "url": "https://www.realsociedad.eus/",
                "image": "http://www.lafutbolteca.com/wp-content/uploads/2009/11/REAL-SOCIEDAD-150x150.jpg"
            },
            {
                "title": "Sevilla FC",
                "url": "http://www.sevillafc.es/",
                "image": "http://www.lafutbolteca.com/wp-content/uploads/2009/11/SEVILLA-150x150.jpg"
            },
            {
                "title": "Valencia CF",
                "url": "http://www.valenciacf.com/",
                "image": "http://www.lafutbolteca.com/wp-content/uploads/2010/01/VALENCIA-150x150.jpg"
            },
            {
                "title": "Villareal CF",
                "url": "https://www.villarrealcf.es/",
                "image": "http://www.lafutbolteca.com/wp-content/uploads/2009/11/VILLARREAL-150x150.jpg"
            },
        ]
    },
    computed: {
        
        filteredArticles: function () {
            var articles_array = this.articles,
                searchString = this.searchString;

            if(!searchString){
                return articles_array;
            }

            searchString = searchString.trim().toLowerCase();

            articles_array = articles_array.filter(function(item){
                if(item.title.toLowerCase().indexOf(searchString) !== -1){
                    return item;
                }
            })
            
            return articles_array;
        }
    }
});