// Standalone Cloudflare Worker for queue consumers and cron triggers.
// Runs independently from the Next.js app — no OpenNext dependency.
// Local dev: `npm run worker:dev`
// Deploy:    `npm run deploy:worker`

interface Env {
  DATABASE_URL: string;
  NOTIFICATIONS_QUEUE: Queue;
  R2_PUBLIC: R2Bucket;
  R2_PRIVATE: R2Bucket;
  BROWSER: Fetcher;
}

export default {
  async queue(
    batch: MessageBatch,
    env: Env,
    ctx: ExecutionContext,
  ): Promise<void> {
    for (const message of batch.messages) {
      try {
        console.log(`[queue] Processing message ${message.id}:`, JSON.stringify(message.body));
        // TODO: implement notification processing
        message.ack();
      } catch (error) {
        console.error(`[queue] Task ${message.id} failed:`, error);
        message.retry();
      }
    }
  },

  async scheduled(
    controller: ScheduledController,
    env: Env,
    ctx: ExecutionContext,
  ): Promise<void> {
    switch (controller.cron) {
      case "0 * * * *": {
        console.log("[cron] Hourly job:", new Date(controller.scheduledTime).toISOString());
        // TODO: implement hourly job
        break;
      }
      default:
        console.log("[cron] Unknown cron pattern:", controller.cron);
    }
  },
} satisfies ExportedHandler<Env>;
