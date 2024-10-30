import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forRootAsync({
        useFactory: (configService: ConfigService) => ({
            type: 'postgres',
            host: configService.getOrThrow('DB_HOST') || 'localhost',
            port: configService.getOrThrow('DB_PORT') || 5432,
            username: configService.getOrThrow('POSTGRES_USER'),
            password: configService.getOrThrow('POSTGRES_PASSWORD'),
            database: configService.getOrThrow('POSTGRES_DB'),
            // entities: [YourEntity], // Your entity classes
            synchronize: configService.getOrThrow('POSTGRES_SYNCHRONIZE'),
            autoLoadEntities: true,
        }),
        inject: [ConfigService]
    }),
    
    ],
})
export class DatabaseModule {}
