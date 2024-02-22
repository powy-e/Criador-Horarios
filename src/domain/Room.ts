export type RoomDto = {
    id: string
    name: string
    type: string
    fullName: string
    classification: {
        'pt-PT': string
        'en-GB': string
    }
    capacity: {
        regular: number,
        exam: number
    }
    description: string
    building: MiniRoomDto
    campus: MiniRoomDto
    containedIn: MiniRoomDto
    contains: MiniRoomDto[]

}
export type MiniRoomDto = {
    id: string
    name: string
    type: string
    fullName: string
    classification: {
        'pt-PT': string
        'en-GB': string
    }
}