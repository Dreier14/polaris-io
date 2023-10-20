import axios from 'axios';
import { action, makeObservable, observable } from 'mobx';
import { iCountryData } from '../interfaces/iCountryData';

export class CountryAppStore {
    @observable isLoading: boolean = true;
    @observable countryData: iCountryData | undefined =  undefined;

    constructor() {
        makeObservable(this);
    }

    @action
    setIsLoading(isLoading: boolean): void {
        this.isLoading = isLoading;
    }

    @action
    setCountryData(countryData: iCountryData | undefined): void {
        this.countryData = countryData;
    }

    @action
    async getCountryData(): Promise<void> {
        try {
            this.setIsLoading(true);

            // We could create a helper function to also get the endpoint and configure it depending on the environment
            const response: iCountryData = await axios.get('https://restcountries.com/v3.1/all');
            this.setCountryData(response);

        } catch (e: any) {
            console.error(e);
        } finally {
            this.setIsLoading(false);
        }
    }

}