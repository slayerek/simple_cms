export interface PageInterface {
    id: number,
    name: string,
    url: string,
    short_desc: string,
    long_desc: string,
    active: number,
    menu: number,
    parent_id: number,
    image?: string,
    subpages?: Object[]
}
