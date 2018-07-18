export class Job {

  constructor(
    public id: string,
    public created_at: string,
    public title: string,
    public location: string,
    public type: string,
    public description: string,
    public how_to_apply: string,
    public company: string,
    public company_url: string,
    public company_logo: string,
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
}
