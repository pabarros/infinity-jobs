export class Job {

  constructor(
    public id: string,
    private _createdAt: string,
    public title: string,
    public location: string,
    public type: string,
    public description: string,
    public howToApply: string,
    public company: string,
    public companyUrl: string,
    public companyLogo: string,
    public url: string
  ) { }

  /**
   * Format `location` attribute string to perform
   * google maps search url
   */
  public locationSearchGMaps(): string {
    const googleMapsUrl = 'https://www.google.com.br/maps/place/';
    const formatedLocation = this.location
      .replace('(Or Remote)', '')
      .replace(' ', '+');

    return `${googleMapsUrl}${formatedLocation}`;
  }

  public get createdAt(): string {
    return this._createdAt.slice(0, 12);
  }
}
