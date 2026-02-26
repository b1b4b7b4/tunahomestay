import { pgTable, serial, integer, text, jsonb, boolean, timestamp, varchar } from 'drizzle-orm/pg-core';

export const contentImages = pgTable('content_images', {
	id: serial('id').primaryKey(),
	page: varchar('page', { length: 50 }).notNull(),
	section: varchar('section', { length: 50 }).notNull(),
	title: text('title'),
	src: text('src').notNull(),
	order: integer('order').notNull().default(0),
	metadata: jsonb('metadata'),
});

export const contentBlocks = pgTable('content_blocks', {
	id: serial('id').primaryKey(),
	page: varchar('page', { length: 50 }).notNull(),
	section: varchar('section', { length: 50 }).notNull(),
	title: text('title'),
	description: text('description'),
	image: text('image'),
	order: integer('order').notNull().default(0),
	metadata: jsonb('metadata'),
});

export const contentListItems = pgTable('content_list_items', {
	id: serial('id').primaryKey(),
	page: varchar('page', { length: 50 }).notNull(),
	listName: varchar('list_name', { length: 50 }).notNull(),
	title: text('title').notNull(),
	description: text('description'),
	image: text('image'),
	small: boolean('small'),
	order: integer('order').notNull().default(0),
	metadata: jsonb('metadata'),
});

export const contentConfig = pgTable('content_config', {
	id: serial('id').primaryKey(),
	page: varchar('page', { length: 50 }).notNull(),
	section: varchar('section', { length: 50 }).notNull(),
	key: varchar('key', { length: 100 }).notNull(),
	value: text('value').notNull(),
	updatedAt: timestamp('updated_at').defaultNow(),
});

export const nearPlaces = pgTable('near_places', {
	id: serial('id').primaryKey(),
	distance: varchar('distance', { length: 10 }).notNull(),
	title: text('title').notNull(),
	image: text('image').notNull(),
	order: integer('order').notNull().default(0),
});

export const nearTypes = pgTable('near_types', {
	id: serial('id').primaryKey(),
	title: text('title').notNull(),
	href: text('href').notNull(),
	order: integer('order').notNull().default(0),
});

export const pricing = pgTable('pricing', {
	id: serial('id').primaryKey(),
	pricePerNight: integer('price_per_night').notNull().default(200000),
	currency: varchar('currency', { length: 3 }).notNull().default('VND'),
	updatedAt: timestamp('updated_at').defaultNow(),
});

export const mapConfig = pgTable('map_config', {
	id: serial('id').primaryKey(),
	centerLat: text('center_lat').notNull(),
	centerLng: text('center_lng').notNull(),
	zoom: integer('zoom').notNull().default(15),
	markerLat: text('marker_lat').notNull(),
	markerLng: text('marker_lng').notNull(),
	markerPopup: text('marker_popup').notNull(),
	tileUrl: text('tile_url').notNull(),
	attribution: text('attribution').notNull(),
	googleMapsUrl: text('google_maps_url').notNull(),
});
