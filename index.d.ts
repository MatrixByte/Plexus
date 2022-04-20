import {
	CommandInteraction,
	EmojiResolvable,
	Message,
	MessageEmbed,
	User,
	MessageButtonStyle,
} from 'discord.js'
import { Database } from 'quickmongo'

export type DB = Database

type BtnColor = MessageButtonStyle
type HexColorString = `#${string}` | string

export type calculatorOptions = {
	embedColor: HexColorString
	slash?: boolean
	credit?: boolean
	embedFooter?: string
}
export declare function calculator(
	interaction: CommandInteraction,
	options?: calculatorOptions
): Promise<void>

export type ghostPingOptions =
	| {
			embedDesc?: string
			embedColor?: HexColorString
			embedFoot?: string
			credits?: boolean
			logChannel?: string
	  }
	| { embed: MessageEmbed }
export declare function ghostPing(
	message: Message,
	options?: ghostPingOptions
): Promise<void>


export type rpsOptions = {
	embedColor?: HexColorString // default: #075FFF
	timeoutEmbedColor?: HexColorString // default: #c90000
	drawEmbedColor?: HexColorString // default: #075FFF
	winEmbedColor?: HexColorString // default: #06bd00
	embedFooter?: string //Not in the docs, but in the code
	rockColor?: BtnColor // default: grey
	paperColor?: BtnColor // default: grey
	scissorsColor?: BtnColor // default: grey
	/** Slash support */
	slash?: boolean

	userSlash?: string
	/** Credit the package */
	credit?: boolean
}
export declare function rps(
	message: Message,
	options?: rpsOptions
): Promise<User>

export declare function rps(
	interaction: CommandInteraction,
	options?: rpsOptions
): Promise<any>

export type tictactoeOptions = {
	//Embed
	/**  The Embed Foot of the How to play embed */
	embedFoot: string
	/** The Embed Color of the How to play embed */
	embedColor: HexColorString
	/**  Give credits to this package (Boolean[true / false]) Default: true */
	credit: boolean
	/** Slash support */
	slash?: boolean
	//Buttons
	/** Emoji for X user[Player 1] */
	xEmoji: EmojiResolvable
	/** Emoji for O user[Player 2] */
	oEmoji: EmojiResolvable
	/** Emoji when the space is not occupied */
	idleEmoji: EmojiResolvable

	userSlash?: string

	resultBtn?: boolean
}
export declare function tictactoe(
	message: Message,
	options?: tictactoeOptions
): Promise<any>
export declare function tictactoe(
	interaction: CommandInteraction,
	options?: tictactoeOptions
): Promise<any>