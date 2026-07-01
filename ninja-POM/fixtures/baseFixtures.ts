import { LoginPage } from '../pages/loginPage';
import{test as Base, expect} from "@playwright/test";


type Fixtures = {
    loginPage: LoginPage;
}


export const test = Base.extend<Fixtures>({

    loginPage: async ({page}, use)=>{
        await use(new LoginPage(page))
    }

});

export{expect};


