export class Job {

  constructor(
    public id: string,
    private _createdAt: string,
    public title: string,
    public location: string,
    public description: string,
    public howToApply: string,
    public company: string,
    public companyUrl: string,
    public companyLogo: string,
    public url: string
  ) { }

  public get createdAt(): string {
    return this._createdAt.slice(0, 10);
  }

  public get allowRemote(): boolean {
    return this.location.toLocaleLowerCase().indexOf('remote') !== -1;
  }
}
