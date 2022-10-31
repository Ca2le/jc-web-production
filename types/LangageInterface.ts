    export interface ILangage {
        nav_services: string;
        nav_showroom: string;
        nav_developers: string
        nav_contact: string;
        home_h_1: string;
        home_h_2: readonly string[];
        home_h_3: string;
        readmore_txt: string;
        about_h: string;
        about_text: string;
        about_card: {
                id: string;
                direction: string;
                link: string;
                image: string;
                background_color: string;
                about_card_h: string;
                about_card_txt: string;
        }[];
        showroom_h: string;
        showroom_projects: readonly {
            id: string;
            title: string;
            subcategory: string;
            description: string;
            status: string;
            img_cover_hex: string;
            img: string
        }[]
        showroom_text: string;
        showroom_link_text: string;
        foot_h: string;
        copy_mail: string;
        fa_link: string;
        li_link: string;
        foot_copyright: string;
    }
   
