export type Status = 'ongoing' | 'pending' | 'completed'
export interface Data {
    id: number
    content: string
    status: Status
}
