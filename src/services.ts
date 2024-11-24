import axios from "axios";

export class Services {
    public static GetApplicationInfomation() {
        if ((window as any).webapplication) {
            return (window as any).webapplication as {
                id: string
            }
        }
        else {
            return undefined
        }
    }
    public static async Exit() {
        await axios.get("/api/v1/app/exit");
    }
    public static async Maximize() {
        let webapplication = Services.GetApplicationInfomation();
        if (webapplication) {
            await axios.get(`/api/v1/app/maximize/${webapplication.id}`);
        }
    }
    public static async Minimize() {
        let webapplication = Services.GetApplicationInfomation();
        if (webapplication) {
            await axios.get(`/api/v1/app/minimize/${webapplication.id}`);
        }
    }
    public static async Open(url: string) {
        let webapplication = Services.GetApplicationInfomation();
        if (webapplication) {
            await axios.get(`/api/v1/app/open/${url}`);
        }
    }

    public static async Home() {
        await axios.get(`/api/v1/app/home`);
    }
}