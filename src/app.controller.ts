import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { ArticleDTO } from './article.dto';
import { Article } from './article.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("/articles")
  getArticles(): Promise<Article[]> {
    return this.appService.getAllArticles();
  }

  @Post('/articles')
  async createArticle(
    @Body() createArticleDto: ArticleDTO,
  ): Promise<ArticleDTO> {
    return this.appService.storeArticle(createArticleDto);
  }
}
