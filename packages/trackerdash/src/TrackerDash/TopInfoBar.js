import { VisComponent } from '@candela/core';

import $ from 'jquery';

import topInfoBar from './templates/topInfoBar.jade';

class TopInfoBar extends VisComponent {
  constructor (el, settings) {
    super(el);
    this.$el = $(this.el);

    this.name = settings.name || 'Ground Truth';
    this.branch = settings.branch || 'No branch set';
    this.day = settings.day || this.getToday();
    this.submissionUuid = settings.submission_uuid;
    this.helpLink = settings.help_link;
  }

  render () {
    this.$el.html(topInfoBar({
      name: this.name,
      branch: this.branch,
      day: this.day,
      uuid: this.submissionUuid,
      helpLink: this.helpLink
    }));
  }
}

export default TopInfoBar;
