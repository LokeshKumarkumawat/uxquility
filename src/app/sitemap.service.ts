import { Injectable } from '@angular/core';

import { SitemapStream, streamToPromise } from 'sitemap';
import { createReadStream } from 'fs';
import { Response } from 'express';
import { RoutesRecognized } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SitemapService {

  constructor() { }

  async generateSitemap(routes: RoutesRecognized[], res: Response) {
    const sitemap = new SitemapStream({ hostname: 'https://example.com' });

    // Add each route to the sitemap
    routes.forEach(route => {
      sitemap.write({ url: route.urlAfterRedirects });
    });

    sitemap.end();

    res.header('Content-Type', 'application/xml');
    sitemap.pipe(res);
  }
}
