import axios from "axios";
import { action, makeObservable, observable } from "mobx";
import { iCountryData } from "../interfaces/iCountryData";

export class CountryAppStore {
    @observable isLoading: boolean = true;
    @observable countryData: Array<iCountryData> | undefined = undefined;

    constructor() {
        makeObservable(this);
    }

    @action
    setIsLoading(isLoading: boolean): void {
        this.isLoading = isLoading;
    }

    @action
    setCountryData(countryData: Array<iCountryData> | undefined): void {
        this.countryData = countryData;
    }

    @action
    async getAllCountryData(): Promise<void> {
        try {
            this.setIsLoading(true);
            // We could create a helper function to also get the endpoint and configure it depending on the environment.
            const response: Record<
                string,
                Array<iCountryData>
            > = await axios.get("https://restcountries.com/v3.1/all");

            this.setCountryData(response.data);
        } catch (e: any) {
            // We want to have an error to the console for the developers if the API has an issue.
            console.error(e);
        } finally {
            this.setIsLoading(false);
        }
    }
}
